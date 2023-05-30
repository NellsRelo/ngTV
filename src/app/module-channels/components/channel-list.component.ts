import { Component, OnInit } from '@angular/core';

import { Channel } from '../model/channel.interface';
import { ChannelService } from '../services/channel.service';

@Component({
    selector: 'channel-list',
    templateUrl: './channel-list.component.html',
    styleUrls: ['./channel-list.component.css']
})

export class ChannelListComponent implements OnInit {
    channels: Channel[] = [];
    displayedColumns: string[] = ['channelNumber', 'icon', 'name'];

    mock_channels: Channel[] = [
        {
            id: 0, channelNumber: 2, name: 'ABC'
        },
        {
            id: 1, channelNumber: 32, name: 'CW'
        },
        {
            id: 2, channelNumber: 42, name: 'Cartoon Network'
        }
    ];

    constructor(
        private channelService: ChannelService
    ) { }

    ngOnInit(): void {
        this.getChannels();
    }

    getChannels(): void {
        this.channels = this.mock_channels;
        //this.channelService.getChannels()
        //    .subscribe(channels => this.channels = channels);
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