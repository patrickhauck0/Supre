import { supabase, supabaseAdmin } from '../config/supabaseClient';

export const registerUser = async (name: string, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    throw new Error(`Register failed: ${error.message}`);
  }

  return data.user;
};

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error('Incorrect email address or password. Please try again.');
  }

  return {
    token: data.session?.access_token,
    user: data.user,
  };
};

export const getProfile = async (userId: string) => {
  if (!supabaseAdmin) {
    throw new Error("The Supabase Admin is not configured. The Service Role needs to be in the .env file!");
  }

  const { data, error } = await supabaseAdmin.auth.admin.getUserById(userId);

  if (error) {
    throw new Error(`Error fetching admin user: ${error.message}`);
  }

  return data.user.user_metadata;
};
