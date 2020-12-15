import { ModalProps } from 'common/components';
import { Breed } from 'features/dashboard/types';

export type DashboardModalProps = {
  breed: Breed;
  onFetchImage: (breed: string) => void;
  error: string;
} & ModalProps;
