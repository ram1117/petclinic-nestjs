import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';

describe('AppointmentsController', () => {
  const user = {
    id: '3a7c9d3b-d2fc-4e3d-968d-786c88a5a4bf',
    username: 'testuser',
  };

  const appointmentItem = {
    id: 'f3e4a8a0-80d5-4d39-bd1e-ae7c3c4f5611',
    userId: '3a7c9d3b-d2fc-4e3d-968d-786c88a5a4bf',
    doctorId: '7b79b545-cc19-4e32-aa8e-d72a3b9bda12',
    treatmentId: 'e2ec3f42-9349-4d8d-9a9d-5c67c7a7ef41',
    petId: '9f231bfd-f52a-45a7-8f45-93203ccfc4d6',
    slotId: '6520f6f7-2e0b-46b6-8f6b-bdb29e729033',
  };

  const updateItem = {
    doctorId: '7b79b545-cc19-4e32-aa8e-d72a3b9bda12',
    treatmentId: 'e2ec3f42-9349-4d8d-9a9d-5c67c7a7ef41',
    petId: '9f231bfd-f52a-45a7-8f45-93203ccfc4d6',
    slotId: '6520f6f7-2e0b-46b6-8f6b-bdb29e729033',
  };

  let controller: AppointmentsController;
  const mockService = {
    getAppointments: jest.fn((id: string) => [appointmentItem]),
    getAppointmentDetail: jest.fn((id: string) => appointmentItem),
    updateAppoinmentDetail: jest.fn(
      (id: string, { updateItem }) => appointmentItem,
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsController],
      providers: [{ provide: AppointmentsService, useValue: mockService }],
    }).compile();

    controller = module.get<AppointmentsController>(AppointmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getAppointments function', () => {
    const result = controller.getAppointments(user);
    expect(mockService.getAppointments).toHaveBeenCalledTimes(1);
    expect(result).toBeDefined();
  });
});
