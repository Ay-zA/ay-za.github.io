class IService {
  icon?: String;
  title: String;
  about: String;
}

export class Service {
  icon?: String;
  title: String;
  about: String;

  constructor(service?: IService) {
    this.icon = (service && service.icon) || '';
    this.title = (service && service.title) || 'Title';
    this.about = (service && service.about) || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}
