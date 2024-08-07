import { useState, useEffect } from "react";
import { auth, googleProvider, dataBase } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  Button,
  TextField,
  Container,
  Typography,
  Grid,
  Box,
  Link,
} from "@mui/material";
import Swal from "sweetalert2";

const Auth = ({ onAuthStateChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async (uid) => {
      const docRef = doc(dataBase, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userRole = docSnap.data().role;
        setRole(userRole);
        onAuthStateChange(user, userRole);
      } else {
        console.log("No such document!");
      }
    };

    if (user) {
      fetchUserRole(user.uid);
    }
  }, [user]);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
        Swal.fire(
          "Registro exitoso",
          "Usuario registrado con éxito",
          "success"
        );
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
        Swal.fire(
          "Inicio de sesión exitoso",
          "Usuario ha iniciado sesión con éxito",
          "success"
        );
      }
    } catch (error) {
      console.error("Error durante la autenticación", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      Swal.fire(
        "Inicio de sesión con Google exitoso",
        "Usuario ha iniciado sesión con Google con éxito",
        "success"
      );
    } catch (error) {
      console.error("Error durante la autenticación con Google", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole("");
      onAuthStateChange(null, ""); // Clear user and role on sign out
      Swal.fire(
        "Cierre de sesión exitoso",
        "Usuario ha cerrado sesión con éxito",
        "success"
      );
    } catch (error) {
      console.error("Error durante el cierre de sesión", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {user ? (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Usuario ha iniciado sesión {role && `(Rol: ${role})`}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignOut}
          >
            Cerrar sesión
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {isRegister ? "Registro" : "Iniciar sesión"}
          </Typography>
          <Box component="form" onSubmit={handleAuth} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isRegister ? "Registrar" : "Iniciar sesión"}
            </Button>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleGoogleAuth}
                  startIcon={
                    <img
                      src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1719624151/logo_google_h7sqns.png"
                      alt="Logo de Google"
                      style={{ width: 20, height: 20 }}
                    />
                  }
                >
                  Iniciar sesión con Google
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {isRegister
                    ? "Cambiar a Iniciar sesión"
                    : "Cambiar a Registro"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Auth;
