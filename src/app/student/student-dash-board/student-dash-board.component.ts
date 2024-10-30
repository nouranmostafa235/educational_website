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
    // Extract labels from studentCourses
    const labels = this.studentCourses.map((course: any) => course.name); 

    // Update the chart configuration with dynamic labels
    this.config.data.labels = labels;

    // If you want to set specific data for each course, adjust the datasets as needed
    this.config.data.datasets.forEach((dataset: any) => {
      dataset.data = this.studentCourses.map(() => Math.floor(Math.random() * 100)); // Example data, replace with actual data
    });

    // Re-render the chart with updated data
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
          backgroundColor: "blue"
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
