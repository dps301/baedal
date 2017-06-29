export class ServerAddr {
  private static serverAddr = 'http://api.bluelab.me:4000/client';

  public static getServerAddr() {
    return this.serverAddr;
  }
}