import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puzzle';

  correct = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  arr = [0, 8, 4, 5, 6, 3, 7, 2, 1];
  showHiddenBlock = false;
  swap(i: number, j: number) {
    let k: number = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = k;

  }

  move(index) {


    if (this.correct.toString() != this.arr.toString()) {


      switch (index) {
        case 0: {
          if (this.arr[1] == 2) {
            this.swap(0, 1);
          } else if (this.arr[3] == 2) {
            this.swap(0, 3);
          }
          break;
        }
        case 1: {
          if (this.arr[0] == 2) {
            this.swap(1, 0);
          } else if (this.arr[2] == 2) {
            this.swap(1, 2);
          } else if (this.arr[4] == 2) {
            this.swap(1, 4);
          }

          break;
        }
        case 2: {

          if (this.arr[1] == 2) {
            this.swap(2, 1);
          } else if (this.arr[5] == 2) {
            this.swap(2, 5);
          }

          break;
        }

        case 3: {
          if (this.arr[0] == 2) {
            this.swap(3, 0);
          } else if (this.arr[6] == 2) {
            this.swap(3, 6);
          } else if (this.arr[4] == 2) {
            this.swap(3, 4);
          }

          break;
        }
        case 4: {
          if (this.arr[1] == 2) {
            this.swap(1, 4);
          } else if (this.arr[3] == 2) {
            this.swap(3, 4);
          } else if (this.arr[5] == 2) {
            this.swap(4, 5);

          } else if (this.arr[7] == 2) {
            this.swap(4, 7);
          }

          break;
        }
        case 5: {
          if (this.arr[2] == 2) {
            this.swap(5, 2);
          } else if (this.arr[8] == 2) {
            this.swap(5, 8);
          } else if (this.arr[4] == 2) {
            this.swap(4, 5);
          }

          break;
        }

        case 6: {
          if (this.arr[3] == 2) {
            this.swap(3, 6);
          } else if (this.arr[7] == 2) {
            this.swap(7, 6);
          }

          break;
        }
        case 7: {
          if (this.arr[6] == 2) {
            this.swap(7, 6);
          } else if (this.arr[8] == 2) {
            this.swap(7, 8);
          } else if (this.arr[4] == 2) {
            this.swap(4, 7);
          }

          break;
        }
        case 8: {
          if (this.arr[5] == 2) {
            this.swap(5, 8);
          } else if (this.arr[7] == 2) {
            this.swap(7, 8);
          }
          break;
        }

      }
    }


    if (this.correct.toString() == this.arr.toString()) {
      this.showHiddenBlock = true;

    }






  }













}
