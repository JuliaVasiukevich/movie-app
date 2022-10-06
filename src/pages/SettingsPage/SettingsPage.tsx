import { ColorMode, ResetPasswordForm, UpdateProfileForm } from "components";
import { useState } from "react";
import { useAppSelector, getUserInfo } from "store";
import { Setting, Name, Wrapper, Container, EditButton, ProfileText, Subtitle } from "./styles";
import { PencilIcon, DeleteIcon } from "assets";
import { motion, AnimatePresence } from "framer-motion";

export const SettingsPage = () => {
  const { email } = useAppSelector(getUserInfo);
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);

  const toggleOpen = () => {
    setIsProfileFormOpen(!isProfileFormOpen);
  };

  return (
    <Container>
      <Setting>
        <Name>Profile</Name>
        <Wrapper>
          <AnimatePresence>
            {isProfileFormOpen ? (
              isProfileFormOpen &&
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <UpdateProfileForm toggleProfileOpen={toggleOpen} />
                <EditButton>
                  <DeleteIcon onClick={toggleOpen} />
                </EditButton>
              </motion.div>
            ) : (
              <>
                <ProfileText> <Subtitle>Email: </Subtitle>{email}</ProfileText>
                <EditButton>
                  <PencilIcon onClick={toggleOpen} />
                </EditButton>
              </>
            )}
          </AnimatePresence>
        </Wrapper>
      </Setting>
      <Setting>
        <Name>Password</Name>
        <Wrapper>
          <ResetPasswordForm />
        </Wrapper>
      </Setting>
      <Setting>
        <Name>ColorMode</Name>
        <Wrapper>
          <ColorMode />
        </Wrapper>
      </Setting>
    </Container>
  );
};
