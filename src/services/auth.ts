import {
  User,
  UserInfo,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "./firebase-config";
import { useToast } from "@chakra-ui/react";
import ms from "ms";
import ApiClient from "./api-client";

class Authentication {
  toast = useToast();
  registerUser = async (username: string, email: string, password: string) => {
    const apiClient = new ApiClient();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        await updateProfile(res.user, {
          displayName: username,
        });

        apiClient.setSavedProducts(res.user.uid);
      })
      .catch(() => {
        this.toast({
          title: "User already exist",
          status: "error",
          duration: ms("5s"),
          isClosable: false,
          position: "top",
        });
      });
    this.loginUser(email, password);
  };

  loginUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => this.setUser(res.user))
      .catch(() => {
        this.toast({
          title: "Check email or password",
          description: "'If you don't have an account signUp'",
          status: "error",
          duration: ms("5s"),
          isClosable: false,
          position: "top",
        });
      });
  };

  googleAuthProvider = async () => {
    await signInWithPopup(auth, provider).then((res) => this.setUser(res.user));
  };

  setUser = (user: User | UserInfo) => {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/";
  };

  logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
}

export default Authentication;
