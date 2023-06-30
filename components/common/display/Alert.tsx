import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  styled,
  DialogProps,
  ButtonProps,
  useTheme,
  Box,
  Typography,
} from "@mui/material";
import StyledButton from "../input/StyledButton";

const StyledDialog = styled((props: DialogProps) => {
  const theme = useTheme();

  return (
    <Dialog
      {...props}
      PaperProps={{
        elevation: 0,
        sx: {
          border: `2px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.primary.main,
          borderRadius: "20px",
          minWidth: "300px",
          minHeight: "200px",
        },
      }}
    />
  );
})(({ theme }) => ({}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  backgroundColor: "white",
}));

const StyledDialogAction = styled(DialogActions)(({ theme, children }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  padding: 0,
  backgroundColor: children ? theme.palette.primary.main : "transparent",
  margin: 0,
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "white",
  textAlign: "center",
}));

const DialogButton = styled(StyledButton)(({ theme }) => ({
  borderRadius: 0,
}));

const Alert = (
  props: DialogProps & {
    contentTitle?: string;
    contentSubtitle?: string;
    contentText?: string;
    contentNode?: any;
    accessButtonText?: string;
    closeButtonText?: string;
    closeButtonProps?: ButtonProps;
    onAccess?: React.MouseEventHandler<HTMLButtonElement>;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
  }
) => {
  const {
    contentTitle,
    contentSubtitle,
    contentText,
    contentNode,
    accessButtonText,
    closeButtonText,
    closeButtonProps,
    onClose,
    onAccess,
    ...rest
  } = props;

  return (
    <StyledDialog onClose={onClose} {...rest}>
      {contentTitle && (
        <StyledDialogTitle>
          <Typography variant="h6" component="div" fontWeight={600}>
            {contentTitle}
          </Typography>
          {contentSubtitle && (
            <Typography variant="caption" component="div">
              {contentSubtitle}
            </Typography>
          )}
        </StyledDialogTitle>
      )}
      <StyledDialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {contentText && (
          <DialogContentText
            textAlign={"center"}
            color={contentTitle ? "GrayText" : "inherit"}
            alignSelf={contentTitle ? "inherit" : "center"}
            whiteSpace={"pre-wrap"}
          >
            {contentText}
          </DialogContentText>
        )}
        {contentNode}
      </StyledDialogContent>
      <StyledDialogAction disableSpacing>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: accessButtonText ? "1fr 1fr" : "1fr",
          }}
        >
          <DialogButton {...closeButtonProps} onClick={onClose}>
            {closeButtonText}
          </DialogButton>
          {accessButtonText && (
            <DialogButton onClick={onAccess}>{accessButtonText}</DialogButton>
          )}
        </Box>
      </StyledDialogAction>
    </StyledDialog>
  );
};

export default Alert;
