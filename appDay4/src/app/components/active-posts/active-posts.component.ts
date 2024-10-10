import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/jsonresponse';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent implements OnInit {
  posts: iPost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return <Promise<iJSONresponse>>response.json();
        } else {
          throw new Error('Errore nella get!');
        }
      })
      .then((data) => {
        this.posts = data.posts.filter((post) => post.active === true);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
