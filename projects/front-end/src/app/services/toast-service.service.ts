import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';
export let TOASTR_TOKEN = new InjectionToken<ToastServiceService>('toastr');


export interface ToastServiceService {
  success(msg: string, title: string):void
  info(msg: string, title: string):void
  warning(msg: string, title: string):void
  error(msg: string, title: string):void
}
