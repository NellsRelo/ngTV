import { Component, OnInit } from '@angular/core';

import { Channel } from '../model/channel.interface';
import { ChannelService } from '../services/channel.service';

@Component({
    selector: 'channel-list',
    templateUrl: './channel-list.component.html',
})

export class ChannelListComponent implements OnInit {
    channels: Channel[] = [];

    constructor(
        private channelService: ChannelService
    ) { }

    ngOnInit(): void {
        this.getChannels();
    }

    getChannels(): void {
        this.channelService.getChannels()
            .subscribe(channels => this.channels = channels);
    }

    add(channelNumber: number, name: string, icon?: string): void {
        name = name.trim();
        icon = icon?.trim();

        this.channelService.addChannel({
            channelNumber,
            name,
            icon
        } as Channel)
            .subscribe(channel => {
                this.channels.push(channel);
            });
    }

    delete(channel: Channel): void {
        this.channels = this.channels.filter(c => c !== channel);
        this.channelService.deleteChannel(channel.id).subscribe();
    }
}