import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  path?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed = false;

  readonly navItems: NavItem[] = [
    { label: 'Home', icon: 'home', path: '/home' },
    { label: 'Analytics', icon: 'chart' },
    { label: 'Users', icon: 'users' },
    { label: 'Reports', icon: 'document' },
    { label: 'Settings', icon: 'settings' },
  ];
}
