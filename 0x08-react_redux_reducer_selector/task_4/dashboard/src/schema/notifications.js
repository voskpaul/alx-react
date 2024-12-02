import { schema, normalize } from 'normalizr';

const notification = new schema.Entity('notifications');
export const notificationsNormalizer = (data) => normalize(data, [notification]);

