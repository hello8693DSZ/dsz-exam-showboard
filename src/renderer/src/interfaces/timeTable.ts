export interface TimeSlot {
  name: string;
  start: string;
  end: string;
}

export interface ExamSchedule {
  examName: string;
  message: string;
  room: string;
  examInfos: TimeSlot[];
}
