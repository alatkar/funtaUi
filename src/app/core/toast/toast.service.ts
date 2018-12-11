import { Injectable } from '@angular/core';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private indexWarning: number;
  constructor(private toastyService: ToastaService, private toastyConfig: ToastaConfig) {
    // Possible values: default, bootstrap, material
    this.toastyConfig.theme = 'default';
  }

  public Default(opts: ToastOptions) {
    const toastOptions: ToastOptions = {
      title: '',
      msg: '',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {

      },
      onRemove: function (toast: ToastData) {

      }
    };
    Object.assign(toastOptions, opts);
    this.toastyService.default(toastOptions);
  }

  public Warning(opts: ToastOptions) {
    const toastOptions: ToastOptions = {
      title: '',
      msg: '',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {

      },
      onRemove: function (toast: ToastData) {

      }
    };
    Object.assign(toastOptions, opts);
    this.toastyService.warning(toastOptions);
  }

  public Info(opts: ToastOptions) {
    const toastOptions: ToastOptions = {
      title: '',
      msg: '',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {

      },
      onRemove: function (toast: ToastData) {

      }
    };
    Object.assign(toastOptions, opts);
    this.toastyService.info(toastOptions);
  }

  public Error(opts?: ToastOptions) {
    const toastOptions: ToastOptions = {
      title: 'Error',
      msg: 'Internal Error',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {

      },
      onRemove: function (toast: ToastData) {

      }
    };
    Object.assign(toastOptions, opts);
    this.toastyService.error(toastOptions);
  }

  public Wait(opts?: ToastOptions) {
    const toastOptions: ToastOptions = {
      title: 'Please Wait',
      msg: 'loading...',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        this.indexWarning = toast.id;
      },
      onRemove: function (toast: ToastData) {

      }
    };
    Object.assign(toastOptions, opts);
    this.toastyService.wait(toastOptions);
  }

  public Success(opts?: ToastOptions) {
    const toastOptions: ToastOptions = {
      title: 'Done',
      msg: 'Success',
      showClose: true,
      timeout: 5000,
      theme: 'default',
      onAdd: (toast: ToastData) => {

      },
      onRemove: function (toast: ToastData) {

      }
    };
    Object.assign(toastOptions, opts);
    this.toastyService.success(toastOptions);
  }

  public ClearAll() {
    this.toastyService.clearAll();
  }

  public CLear(id) {
    this.toastyService.clear(id);
  }

  public ClearWaiting() {
    this.toastyService.clear(this.indexWarning);
  }
}
