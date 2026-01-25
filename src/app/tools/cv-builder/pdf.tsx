"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

type Education = {
  school: string;
  program: string;
  period: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

type CVData = {
  fullName: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;

  summary: string;

  skills: string[];
  languages: string[];

  education: Education[];
  experience: Experience[];

  certificates: string[];
};

export default function CVPdf({ data }: { data: CVData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.fullName}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.contact}>
            {data.location}  •  {data.phone}  •  {data.email}
            {data.linkedin ? `  •  ${data.linkedin}` : ""}
          </Text>
        </View>

        <Section title="Summary">
          <Text style={styles.text}>{data.summary}</Text>
        </Section>

        <Section title="Skills">
          <View style={styles.rowWrap}>
            {data.skills.map((s) => (
              <Text key={s} style={styles.tag}>
                {s}
              </Text>
            ))}
          </View>
        </Section>

        <Section title="Languages">
          {data.languages.map((l) => (
            <Text key={l} style={styles.bullet}>
              • {l}
            </Text>
          ))}
        </Section>

        <Section title="Education">
          {data.education.map((e, i) => (
            <View key={i} style={styles.item}>
              <Text style={styles.bold}>{e.school}</Text>
              <Text style={styles.text}>
                {e.program}  •  {e.period}
              </Text>
            </View>
          ))}
        </Section>

        <Section title="Experience">
          {data.experience.map((ex, i) => (
            <View key={i} style={styles.item}>
              <Text style={styles.bold}>
                {ex.role} — {ex.company}
              </Text>
              <Text style={styles.muted}>{ex.period}</Text>
              {ex.bullets.filter(Boolean).map((b, bi) => (
                <Text key={bi} style={styles.bullet}>
                  • {b}
                </Text>
              ))}
            </View>
          ))}
        </Section>

        {data.certificates.length > 0 && (
          <Section title="Certificates">
            {data.certificates.map((c) => (
              <Text key={c} style={styles.bullet}>
                • {c}
              </Text>
            ))}
          </Section>
        )}
      </Page>
    </Document>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontSize: 10.5,
    fontFamily: "Helvetica",
    lineHeight: 1.35,
  },

  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginBottom: 12,
  },

  name: { fontSize: 18, fontWeight: 700 },
  title: { fontSize: 11, marginTop: 2, color: "#374151" },
  contact: { fontSize: 9.5, marginTop: 5, color: "#4b5563" },

  section: { marginTop: 10 },
  sectionTitle: { fontSize: 11, fontWeight: 700, marginBottom: 5 },

  item: { marginBottom: 6 },

  text: { color: "#111827" },
  muted: { color: "#6b7280", marginTop: 2 },

  bold: { fontWeight: 700 },

  bullet: { marginLeft: 8, marginTop: 2, color: "#111827" },

  rowWrap: { flexDirection: "row", flexWrap: "wrap", gap: 6 },

  tag: {
    fontSize: 9.5,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 999,
  },
});
