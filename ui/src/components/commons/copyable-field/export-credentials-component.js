import React, { useState } from 'react';
import { Typography, Grid, Select, MenuItem } from '@mui/material/';
import { ExportFileButton, CopyButton } from '../buttons';

const ExportCredentialsField = ({ credentials, exportTypes, text }) => {
	const [exportTypeId, changeExportType] = useState(exportTypes[0].id);
	const exportType = exportTypes.find((type) => type.id === exportTypeId);

	const handleChange = (e) => changeExportType(e.target.value);
	return (
		<React.Fragment>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="baseline"
			>
				<Grid item container xs={10} justifyContent="flex-start">
					<Grid item xs={7}>
						<Typography variant="body1">{text}</Typography>
					</Grid>
					<Grid item>
						<Select
							style={{ minWidth: 240 }}
							value={exportTypeId}
							onChange={handleChange}
							variant="standard"
						>
							{exportTypes.map(({ id, label }) => (
								<MenuItem key={id} variant="body1" value={id}>
									{label}
								</MenuItem>
							))}
						</Select>
					</Grid>
				</Grid>
				<Grid item container xs={2} justifyContent="flex-end">
					<Grid item>
						<ExportFileButton
							fileName={exportType.fileName}
							content={exportType.text(credentials)}
						/>
					</Grid>
					<Grid item>
						<CopyButton content={exportType.text(credentials)} />
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ExportCredentialsField;
