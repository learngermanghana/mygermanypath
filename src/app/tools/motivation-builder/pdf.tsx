"use client";

import React from "react";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

export default function MotivationPdf({
  fullName,
  letter,
}: {
  fullName: string;
  letter: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Motivation Letter</Text>
          <Text style={styles.sub}>{fullName}</Text>
        </View>

        <Text style={styles.body}>{letter}</Text>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, fontFamily: "Helvetica", lineHeight: 1.5 },
  header: {
    marginBottom: 14,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: { fontSize: 16, fontWeight: 700 },
  sub: { fontSize: 10, color: "#4b5563", marginTop: 2 },
  body: { color: "#111827" },
});