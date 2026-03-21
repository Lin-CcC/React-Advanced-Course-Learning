export function show(toast, summary = '', severity = 'success', life = 1000) {
  toast.current.show({
    severity: severity,
    summary: summary,
    life: life,
  });
}
