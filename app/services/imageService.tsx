import { useQuery } from '@tanstack/react-query';
import { ImageGroupApi } from '../api-client';

export const useGetImageGroupQuery = (id: number) => {
  return useQuery({
    queryFn: async () => await new ImageGroupApi().getImageGroup(id, "1" ),
    queryKey: ["imageGroup"],
  });
};