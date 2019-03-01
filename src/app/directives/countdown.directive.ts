import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCountdown]'
})
export class CountdownDirective {
  private display;
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
  /**
   * 1.Расчитываю отрезок времени между датой окончания и датой-сейчас
   * 2.Вычисляю колличество суток в данном отрезке
   * 3.Если суток больше 1 - вывожу в разметку колличество суток
   * 4.Если суток меньше 1 и больше 0 - вывожу в разметку колличество часов, минут, секунд
   */
  @Input() set appCountdown(endDate: any) {

    const resMillecekund = endDate - Date.now();
    const resDay = Math.floor(resMillecekund / (8.64e+7));
    
    if (resDay >= 1) {
      this.display = `${resDay}<span>days left</span>`;
      this.container.createEmbeddedView(this.template);
      return;
    } else if (resDay < 1 && resDay > 0) {

      const resSecund =  Math.floor(resMillecekund / 1000);
      const resMinutes =  Math.floor(resSecund / 60);
      const resHour = Math.floor(resMinutes / 60);

      const reminder_seconds = resSecund % 60;
      const reminder_minutes = resMinutes % 60;
      const reminder_hour = resHour % 24;

      this.display = `${reminder_seconds}:${reminder_minutes}:${reminder_hour}`;

      setTimeout(() => {
        this.container.createEmbeddedView(this.template );
      }, 1000);
      return;
    }
  }
}
