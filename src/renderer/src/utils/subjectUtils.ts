import { parseISO, isBefore } from 'date-fns';
import { TimeSlot } from '@renderer/interfaces/timeTable';

/**
 * 获取当前时间所属的时间段。
 *
 * 该函数遍历给定的时间段数组，比较当前时间是否位于某个时间段的开始时间和结束时间之间。
 * 如果找到这样的时间段，则返回该时间段；如果没有找到，返回null。
 *
 * @param timeSlots 时间段数组，每个元素包含开始时间和结束时间。
 * @returns 当前时间所属的时间段，如果没有任何时间段包含当前时间，则返回null。
 */
export function getCurrentTimeSlot(timeSlots: TimeSlot[]): TimeSlot | null {
  // 获取当前日期和时间
  const now = new Date();
  // 遍历时间段数组
  for (const slot of timeSlots) {
    // 解析时间段的开始时间
    const startTime = parseISO(slot.start);
    // 解析时间段的结束时间
    const endTime = parseISO(slot.end);
    // 判断当前时间是否在开始时间和结束时间之间
    if (isBefore(startTime, now) && isBefore(now, endTime)) {
      // 如果是，返回当前时间段
      return slot;
    }
  }
  // 如果没有找到包含当前时间的时间段，返回null
  return null;
}
