import {Injectable} from '@angular/core';
import {Camera, CameraPhoto, CameraResultType, CameraSource} from '@capacitor/camera';
import {Directory, Filesystem} from '@capacitor/filesystem';
import {Photo} from '../interfaces/photo';
import {RoomsService} from './rooms.service';
import {IRoom} from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor(
    private roomService: RoomsService,
  ) {
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    // Save the picture and add it to photo collection
    const savedImageFile: Photo = await this.savePicture(image);
    this.photos.push(savedImageFile);
    const mRoom: IRoom = {
      id: this.photos.length,
      name: 'new room: ' + this.photos.length,
      photo: savedImageFile,
      plugs: [],
    };
    this.roomService.addRoom(mRoom);
  }

  private async savePicture(cameraPhoto: CameraPhoto) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Write the file to the data directory
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    };

  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
