export const formatDate = (date, options = {}) => {
	const newDate = new Date(date);
	return newDate.toLocaleDateString('pt-BR', options);
}