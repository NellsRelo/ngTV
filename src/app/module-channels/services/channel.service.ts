import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Channel } from '../model/channel.interface';

@Injectable({ providedIn: 'root' })
export class ChannelService {
    private channelsUrl = 'api/channels';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
    ) { }

    getChannels(): Observable<Channel[]> {
        return this.http.get<Channel[]>(this.channelsUrl)
            .pipe(
                tap(_ => this.log('fetched channels')),
                catchError(this.handleError<Channel[]>('getChannels', []))
            );
    }

    addChannel(channel: Channel): Observable<Channel> {
        return this.http.post<Channel>(this.channelsUrl, channel, this.httpOptions).pipe(
            tap((newChannel: Channel) => this.log(`added channel w/ id=${newChannel.id}`)),
            catchError(this.handleError<Channel>('addChannel'))
        );
    }

    deleteChannel(id: number): Observable<Channel> {
        const url = `${this.channelsUrl}/${id}`;

        return this.http.delete<Channel>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted channel id=${id}`)),
            catchError(this.handleError<Channel>('deleteChannel'))
        );
    }

    // Utilities - move these elsewhere or remove when unneeded
    private handleError<T>(operation = 'ooperation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }

    private log(message: string) {
        console.log(message);
    }
}