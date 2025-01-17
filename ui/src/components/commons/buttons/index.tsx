import React from 'react';
import { FileCopy, Save } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { saveAs } from 'file-saver';
import D from 'i18n';

const CopyButton = ({ content }: any) => {
	const copy = () => {
		navigator.clipboard.writeText(content);
		return false;
	};
	return (
		<IconButton aria-label={D.btnSaveAsLabel} onClick={copy}>
			<FileCopy />
		</IconButton>
	);
};

const ExportFileButton = ({ fileName, content }: any) => {
	const save = () => {
		var blob = new Blob([content], {
			type: 'text/plain;charset=utf-8',
		});
		saveAs(blob, fileName);
		return false;
	};
	return (
		<IconButton aria-label={D.btnCopyLabel} onClick={save}>
			<Save />
		</IconButton>
	);
};

export { ExportFileButton, CopyButton };
