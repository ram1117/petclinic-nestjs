import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsService } from './appointments.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AppointmentsService', () => {
  const apptmnts = [
    { id: '1', date: '2024/03/02' },
    { id: '2', date: '2024/03/02' },
  ];

  let service: AppointmentsService;
  const mockPrisma = {
    slot: {
      update: jest.fn(async () => {}),
    },
    appointment: {
      findMany: jest.fn(async () => apptmnts),
      findOne: jest.fn(async () => ({ id: '1', date: '2024/03/02' })),
      findUnique: jest.fn(async () => ({})),
      update: jest.fn(async () => ({})),
      create: jest.fn(async () => ({ id: '1', date: '2024/03/02' })),
      delete: jest.fn(async () => ({})),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppointmentsService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<AppointmentsService>(AppointmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call getAppointments function', async () => {
    const appointments = service.getAppointments('some random id');
    expect((await appointments).length).toEqual(2);
    expect(mockPrisma.appointment.findMany).toHaveBeenCalled();
  });

  it('should call createAppointment function', async () => {
    const newapptmnt = await service.createAppointment('1', {
      userId: '',
      doctorId: '',
      treatmentId: '',
      petId: '',
      slotId: '',
    });

    expect(newapptmnt).toBeDefined();
    expect(mockPrisma.slot.update).toHaveBeenCalledTimes(1);
    expect(mockPrisma.appointment.create).toHaveBeenCalledTimes(1);
  });

  it('should call getAppointmentDetail function', async () => {
    const detail = await service.getAppointmentDetail('1');
    expect(detail).toBeDefined();
  });

  it('should call updateAppointmentDetail function', async () => {
    const updatedDetail = await service.updateAppoinmentDetail('1', {});
    expect(updatedDetail).toBeDefined();
  });

  it('should call deleteAppointment function', async () => {
    const deletedDetail = await service.deleteAppointment('1');
    expect(deletedDetail).toBeDefined();
  });
});
