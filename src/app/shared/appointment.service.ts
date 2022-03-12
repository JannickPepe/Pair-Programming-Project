/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = this.db.list('/appointment');
  }

  // Create
  createBooking(appointment: Appointment) {
    return this.bookingListRef.push({
      name: appointment.name,
      email: appointment.email,
      subject: appointment.subject,
      mobile: appointment.mobile
    })
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, appointment: Appointment) {
    return this.bookingRef.update({
      name: appointment.name,
      email: appointment.email,
      subject: appointment.subject,
      mobile: appointment.mobile
    })
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}