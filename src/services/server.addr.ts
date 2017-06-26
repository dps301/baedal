export class ServerAddr {
  private static serverAddr = 'http://api.bluelab.me:4000';

  public static getServerAddr() {
    return this.serverAddr;
  }
}