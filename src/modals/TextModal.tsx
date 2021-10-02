import { Button, Dialog, Typography } from "@material-ui/core";
import { ElevatedPaper } from "components/paper/ElevatedPaper";
import { createModal } from "react-modal-promise";

export const TextModal = createModal(
	({ isOpen, onResolve, onReject, title, text }: any) => {
		return (
			<Dialog
				open={isOpen}
				onClose={onReject}
				PaperComponent={ElevatedPaper}
			>
				{title && <Typography variant="h6">{title}</Typography>}
				<Typography
					variant="h6"
					color="textSecondary"
					className="whitespace-pre-line"
				>
					{text}
				</Typography>
				<div className="flex-vcenter flex-row-reverse mt-4">
					<Button onClick={onResolve}>Close</Button>
				</div>
			</Dialog>
		);
	}
);
