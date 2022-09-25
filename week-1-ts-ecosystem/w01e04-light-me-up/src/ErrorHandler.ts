export class ErrorHandler {
  print(errorMsg: string) {
    document.body.innerHTML = errorMsg;
  }
}
