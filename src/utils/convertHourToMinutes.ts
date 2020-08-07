export default function convertHourToMinutes(time: string) {
    // horário "08:00"
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}