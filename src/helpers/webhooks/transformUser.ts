export const TransformUser = (data: any) => {
  return {
    ...data,
    email: data?.email_addresses?.[0]?.email_address,
    userId: data.id,
    username: data.username,
    firstName: data.first_name,
    lastName: data.last_name,
    birthdate: data.birthdate,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
};
