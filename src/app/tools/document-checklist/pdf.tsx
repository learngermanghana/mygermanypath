"use client";

import React from "react";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

export default function ChecklistPdf({
  fullName,
  data,
}: {
  fullName: string;
  data: { title: string; items: string[]; timeline: string; mistakes: string[] };
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Germany Document Checklist</Text>
          <Text style={styles.sub}>{fullName}</Text>
          <Text style={styles.small}>{data.title}</Text>
        </View>

        <Section title="Checklist">
          {data.items.map((x) => (
            <Text key={x} style={styles.bullet}>• {x}</Text>
          ))}
        </Section>

        <Section title="Timeline">
          <Text style={styles.text}>{data.timeline}</Text>
        </Section>

        <Section title="Common Mistakes">
          {data.mistakes.map((x) => (
            <Text key={x} style={styles.bullet}>• {x}</Text>
          ))}
        </Section>
      </Page>
    </Document>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View>{children}</View>
    </View>
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
  small: { fontSize: 10, color: "#111827", marginTop: 3 },

  section: { marginTop: 10 },
  sectionTitle: { fontSize: 12, fontWeight: 700, marginBottom: 5 },

  text: { color: "#111827" },
  bullet: { marginLeft: 8, marginTop: 2, color: "#111827" },
});