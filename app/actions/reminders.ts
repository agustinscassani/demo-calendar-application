'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import constants from '@/app/shared/constants';
import { Reminder, ReminderInput } from '@/app/types/reminder';

const API_REMINDERS_URL = `${constants.BASE_URL}reminders`;

export async function createReminder(day: string, formData: FormData) {
  const { color, date, description, time, title } = Object.fromEntries(formData);
  const reminder = {
    color,
    date: `${date}T${time}`,
    description,
    title,
    token: process.env.API_TOKEN,
  } as ReminderInput;
  const options = {
    body: JSON.stringify(reminder),
    headers: { 'content-type': 'application/json' },
    method: 'POST',
  };
  await fetch(API_REMINDERS_URL, options);
  revalidatePath(`/${day}`);
  redirect(`/${day}`);
}

export async function getDaysWithReminders(period: string): Promise<Record<string, Date>[]> {
  const response = await fetch(`${API_REMINDERS_URL}/${process.env.API_TOKEN}?date=${period}`, { cache: 'no-store' });
  const data = await response.json();

  return data;
}

export async function getRemindersByDay(day: string): Promise<Reminder[]> {
  const response = await fetch(`${API_REMINDERS_URL}/${process.env.API_TOKEN}/by-day?date=${day}`, { cache: 'no-store' });
  const data = await response.json();

  data.sort((a: Reminder, b: Reminder) => (+new Date(a.date)) - (+new Date(b.date)));

  return data;
}

export async function getReminderById(id: string): Promise<Reminder> {
  const response = await fetch(`${API_REMINDERS_URL}/${process.env.API_TOKEN}/${id}`, { cache: 'no-store' });
  const data = await response.json();

  return data;
}

export async function updateReminder(day: string, id: string, formData: FormData) {
  const { color, date, description, time, title } = Object.fromEntries(formData);
  const reminder = {
    color,
    date: `${date}T${time}`,
    description,
    title,
  } as ReminderInput;
  const options = {
    body: JSON.stringify(reminder),
    headers: { 'content-type': 'application/json' },
    method: 'PATCH',
  };
  await fetch(`${API_REMINDERS_URL}/${process.env.API_TOKEN}/${id}`, options);
  revalidatePath(`/${day}`);
  redirect(`/${day}`);
}

export async function deleteReminder(day: string, id: string) {
  const options = {
    headers: { 'content-type': 'application/json' },
    method: 'DELETE',
  };
  await fetch(`${API_REMINDERS_URL}/${process.env.API_TOKEN}/${id}`, options);
  revalidatePath(`/${day}`);
  redirect(`/${day}`);
}