import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountdown]'
})
export class CountdownDirective implements OnInit {
  public endDate;
  @Input() set appCountdown(endDate: Date) {
    this.endDate = endDate;
  }
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
  /**
   * ngOnInit()
   * 1.Высчитаваем колличество суток в разнице времени
   * 2.Если колличество суток больше 1 или равно 1, то выводим шаблон в разметку с текстом колличества суток
   * 3.Если колличество суток равно нулю, то каждую секунду вызываем метод this.getTimer() который возвращает
   * строку с таймером и каждую секунду выводим данный шаблон в разметку
   * 4.В других случаях, например если колличество суток имеет отрицательное значение( время прошло ), ничего не выводим
   */
  ngOnInit() {
    const resDay = Math.floor((this.endDate - Date.now()) / (8.64e+7));
    if (resDay >= 1) {
      return this.container.createEmbeddedView(this.template).rootNodes[0].innerText = `${resDay}`;
    } else if (resDay === 0) {
      setInterval(() => {
        this.container.createEmbeddedView(this.template).rootNodes[0].innerText = this.getTimer();
      }, 1000);
    } else {
      return;
    }
  }
  /**
   * ngOnInit()
   * 1.Высчитаваем колличество часов, минут и секунд в разнице времени
   * 2.Возвращаем строку с таймером, которую в ngOnInit() каждую секунду  в разметку
   */
  getTimer() {
    const resSecund =  Math.floor((this.endDate - Date.now()) / 1000);
    const resMinutes =  Math.floor(resSecund / 60);
    const resHour = Math.floor(resMinutes / 60);

    const reminder_seconds = resSecund % 60;
    const reminder_minutes = resMinutes % 60;
    const reminder_hour = resHour % 24;

    return `${reminder_seconds}:${reminder_minutes}:${reminder_hour}`;
  }
}
