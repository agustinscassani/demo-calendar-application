export type Reminder = {
  color: string;
  createdAt: Date;
  date: Date;
  description: string;
  id: string;
  title: string;
  updatedAt: Date;
};

export type ReminderInput = {
  color: string;
  date: string;
  description: string;
  title: string;
  token?: string;
};
