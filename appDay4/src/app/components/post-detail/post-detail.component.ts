import { Component } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/jsonresponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  posts: iPost[] = [];
  post!: iPost;

  constructor(private route: ActivatedRoute) {}

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
        this.posts = data.posts;
        this.route.params.subscribe((params: any) => {
          const clicked = this.posts.find(
            (post) => post.id === parseInt(params.id)
          );
          if (clicked) {
            this.post = clicked;
          } else {
            console.log('Not found');
          }
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
