import { async, ComponentFixture, TestBed } from './node_modules/@angular/core/testing';
import { CommonModule } from './node_modules/@angular/common';
import { FormsModule, } from './node_modules/@angular/forms';
import { BusquedaAvanzadaAdn30Component } from './busqueda-avanzada-adn.component';

describe('BusquedaAvanzadaAdn30Component', () => {
  let component: BusquedaAvanzadaAdn30Component;
  let fixture: ComponentFixture<BusquedaAvanzadaAdn30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [BusquedaAvanzadaAdn30Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAvanzadaAdn30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
