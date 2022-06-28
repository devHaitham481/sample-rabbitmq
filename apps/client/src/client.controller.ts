import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('/greeting')
  async getHello() {
    return this.clientService.getHello();
  }

  @Get('/greeting-async')
  async getHelloAsync() {
    return this.clientService.getHelloAsync();
  }

  @Get('/publish-event')
  async publishEvent() {
    this.clientService.publishEvent();
  }
}
