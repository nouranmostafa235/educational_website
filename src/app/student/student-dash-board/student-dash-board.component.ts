import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthentcationService } from 'src/app/services/authentcation.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-student-dash-board',
  templateUrl: './student-dash-board.component.html',
  styleUrls: ['./student-dash-board.component.css']
})
export class StudentDashBoardComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef; 
  chart: any;
  studentCourses: any;

  constructor(private service: AuthentcationService) { }

  ngOnInit(): void {
    this.service.getUserByToken().subscribe({
      next: (response) => {
        this.studentCourses = response.data.user.enrolled_courses;
        console.log(this.studentCourses);
        this.updateChartLabelsAndData();
      }
    });
  }
  updateChartLabelsAndData(): void {
    const labels = this.studentCourses.map((course: any) => course.name); 
    this.config.data.labels = labels;
    this.config.data.datasets.forEach((dataset: any) => {
      dataset.data = this.studentCourses.map(() => Math.floor(Math.random() * 100));
    });
    if (this.chart) {
      this.chart.update();
    }
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.myChart.nativeElement, this.config); 
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 3 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  };

  public config: any = {
    type: 'bar',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Subject',
          data: [], 
          backgroundColor: "red"
        },        
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
}
