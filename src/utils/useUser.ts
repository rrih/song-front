import { initLogin } from "./useAuth";
import useSWR from "swr";
import { useRouter } from "next/router";
import { findUserById } from "../api/users";

export const useUser = (userId: string) => {
  const { data } = useSWR(userId, findUserById, { shouldRetryOnError: false })
  return { data }
}