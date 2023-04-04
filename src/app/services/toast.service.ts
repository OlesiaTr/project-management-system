import { Injectable } from '@angular/core';

import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastConfig: Partial<IndividualConfig> = {
    timeOut: 5000,
    positionClass: 'toast-top-right',
    progressBar: false,
    closeButton: true,
    tapToDismiss: true,
    disableTimeOut: false,
  };

  constructor(private toastr: ToastrService) {}

  showSuccess(msg: string, title: string = 'Success') {
    this.toastr.success(msg, title, this.toastConfig);
  }

  showError(msg: string, title: string = 'Error') {
    this.toastr.error(msg, title, this.toastConfig);
  }

  showInfo(msg: string, title: string = 'Info') {
    this.toastr.info(msg, title, this.toastConfig);
  }

  showWarning(msg: string, title: string = 'Warning') {
    this.toastr.warning(msg, title, this.toastConfig);
  }
}
