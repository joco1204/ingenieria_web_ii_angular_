  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pruebas-clase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pruebas-clase.component.html',
  styleUrls: ['./pruebas-clase.component.css']
})
export class PruebasClaseComponent {
  homes = [
    {
      name: 'Acme Fresh Start Housing',
      location: 'Chicago, IL',
      image: 'assets/imagen1.jpeg',
    },
    {
      name: 'A113 Transitional Housing',
      location: 'Santa Monica, CA',
      image: 'assets/imagen2.jpeg',
    },
    {
      name: 'Warm Beds Housing Support',
      location: 'Juneau, AK',
      image: 'assets/imagen3.jpeg',
    },
    {
      name: 'Homesteady Housing',
      location: 'Chicago, IL',
      image: 'assets/imagen4.jpeg',
    },
    {
      name: 'Happy Homes Group',
      location: 'Gary, IN',
      image: 'assets/imagen5.jpeg',
    },
    {
      name: 'Hopeful Apartment Group',
      location: 'Oakland, CA',
      image: 'assets/imagen6.jpeg',
    },
    {
      name: 'Seriously Safe Towns',
      location: 'Oakland, CA',
      image: 'assets/imagen7.jpeg',
    },
    {
      name: 'Capital Safe Towns',
      location: 'Portland, OR',
      image: 'assets/imagen8.jpeg',
    },
  ];

  filteredHomes = [...this.homes];

  searchQuery = '';

  filterHomes(): void {
    this.filteredHomes = this.homes.filter((home) =>
      home.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
