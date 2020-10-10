import { Controller, Get, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { ClentServe } from './grpc/grpc.client.server';

@Controller('')
export class AppController implements OnModuleInit {

    private activityService;
    private activityRelationService;
    private fileService;
    private userService;
    private userinfoService;

    constructor(@Inject(ClentServe) private readonly clentServe: ClentServe) {
    }

    onModuleInit() {
        this.activityService = this.clentServe.client.getService('ActivityService');
        this.activityRelationService = this.clentServe.client.getService('ActivityRelationService');
        this.fileService = this.clentServe.client.getService('FileService');
        this.userService = this.clentServe.client.getService('UserService');
        this.userinfoService = this.clentServe.client.getService('UserinfoService');
    }

    // Activity

    @Post('findActivity')
    findActivity(@Body() body) {
        return this.activityService.findActivity(body);
    }

    @Post('findActivityRelation')
    findActivityRelation(@Body() body) {
        return this.activityRelationService.findActivityRelation(body);
    }

    @Post('findFile')
    findFile(@Body() body) {
        return this.fileService.findFile(body);
    }

    @Post('findUser')
    findUser(@Body() body) {
        return this.userService.findUser(body);
    }

    @Post('findUserinfo')
    findUserinfo(@Body() body) {
        return this.userinfoService.findUserinfo(body);
    }
}
