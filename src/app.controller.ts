import { Controller, Get, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { ClentServe } from './grpc/grpc.client.server';

@Controller('')
export class AppController implements OnModuleInit {

    private activityService;
    private userService;

    constructor(@Inject(ClentServe) private readonly clentServe: ClentServe) {
    }

    onModuleInit() {
        this.activityService = this.clentServe.client.getService('ActivityService');
        this.userService = this.clentServe.client.getService('UserService');
    }

    // Activity
    @Post('createActivity')
    createActivity(@Body() body) {
        return this.activityService.createActivity(body);
    }

    @Post('deleteActivity')
    deleteActivity(@Body() body) {
        return this.activityService.deleteActivity(body);
    }

    @Post('updateActivity')
    updateActivity(@Body() body) {
        return this.activityService.updateActivity(body);
    }

    @Post('findActivity')
    findActivity(@Body() body) {
        return this.activityService.findActivity(body);
    }


    // User
    @Post('createUser')
    createUser(@Body() body) {
        return this.userService.createUser(body);
    }

    @Post('deleteUser')
    deleteUser(@Body() body) {
        return this.userService.deleteUser(body);
    }

    @Post('updateUser')
    updateUser(@Body() body) {
        return this.userService.updateUser(body);
    }

    @Post('findUser')
    findUser(@Body() body) {
        return this.userService.findUser(body);
    }
}
