function printTable(gifts) {
  let maxLenGift = 4;
  let maxLenQty = 8;
  const rows = [];

  for (const gift of gifts) {
    const nameLen = gift.name.length;
    const qtyStr = String(gift.quantity);
    const qtyLen = qtyStr.length;
    maxLenGift = Math.max(maxLenGift, nameLen);
    maxLenQty = Math.max(maxLenQty, qtyLen);
    rows.push({ name: gift.name, nameLen, qtyStr, qtyLen });
  }

  const borderLen = maxLenGift + maxLenQty + 7;
  const topBorder = "+".repeat(borderLen);
  const bottomBorder = "*".repeat(borderLen);
  const divider = `| ${"-".repeat(maxLenGift)} | ${"-".repeat(maxLenQty)} |`;
  const giftHeader = `| ${"Gift".padEnd(maxLenGift)} |`;
  const header = `${giftHeader} ${"Quantity".padEnd(maxLenQty)} |`;
  const tableRows = [topBorder, header, divider];

  for (const row of rows) {
    const namePadding = " ".repeat(maxLenGift - row.nameLen);
    const qtyPadding = " ".repeat(maxLenQty - row.qtyLen);
    tableRows.push(
      `| ${row.name}${namePadding} | ${row.qtyStr}${qtyPadding} |`
    );
  }

  tableRows.push(bottomBorder);
  return tableRows.join("\n");
}
