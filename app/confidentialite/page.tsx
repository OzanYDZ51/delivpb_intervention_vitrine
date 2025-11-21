import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Politique de confidentialité - GlassUp',
  description: 'Politique de confidentialité de la plateforme GlassUp',
}

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#0F171E]">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="GlassUp"
              width={150}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        <p className="text-gray-400 mb-8">Dernière mise à jour : 19 novembre 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              GlassUp SAS (ci-après « GlassUp », « nous ») s&apos;engage à protéger
              la vie privée des utilisateurs de sa plateforme.
            </p>
            <p>
              Cette politique de confidentialité explique comment nous collectons, utilisons,
              partageons et protégeons vos données personnelles conformément au Règlement Général
              sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :<br /><br />
              <strong>GlassUp SAS</strong><br />
              Email : dpo@glassup.fr<br />
              Téléphone : 01 89 70 71 22
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Données collectées</h2>
            <h3 className="text-xl font-medium text-white mb-3">3.1 Données d&apos;identification</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom et prénom du représentant légal</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale du siège social</li>
              <li>Dénomination sociale de l&apos;entreprise</li>
              <li>Numéro SIRET</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">3.2 Données professionnelles</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extrait Kbis</li>
              <li>Attestation d&apos;assurance RC professionnelle</li>
              <li>Qualifications et certifications</li>
              <li>RIB professionnel</li>
              <li>Historique des missions réalisées</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3 mt-6">3.3 Données de navigation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse IP</li>
              <li>Type et version du navigateur</li>
              <li>Système d&apos;exploitation</li>
              <li>Pages visitées et actions effectuées</li>
              <li>Date et heure de connexion</li>
              <li>Données de géolocalisation (avec consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Finalités du traitement</h2>
            <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Création et gestion de votre compte utilisateur</li>
              <li>Vérification de votre identité et de votre activité professionnelle</li>
              <li>Fourniture des services de mise en relation</li>
              <li>Traitement et sécurisation des paiements</li>
              <li>Communication relative à vos missions et à votre compte</li>
              <li>Amélioration de nos services et de l&apos;expérience utilisateur</li>
              <li>Établissement de statistiques anonymisées</li>
              <li>Respect de nos obligations légales et réglementaires</li>
              <li>Prévention de la fraude et des impayés</li>
              <li>Gestion des litiges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Base légale du traitement</h2>
            <p>Le traitement de vos données personnelles est fondé sur :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>L&apos;exécution du contrat</strong> : pour créer votre compte et fournir nos services</li>
              <li><strong>Le consentement</strong> : pour les communications marketing et la géolocalisation</li>
              <li><strong>L&apos;intérêt légitime</strong> : pour améliorer nos services et prévenir la fraude</li>
              <li><strong>L&apos;obligation légale</strong> : pour respecter nos obligations fiscales et comptables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Destinataires des données</h2>
            <p>Vos données peuvent être partagées avec :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Les autres utilisateurs de la plateforme dans le cadre des missions (informations limitées au strict nécessaire)</li>
              <li>Nos prestataires techniques : hébergement (Vercel), paiement (Stripe), analytics (Plausible)</li>
              <li>Nos prestataires de vérification d&apos;identité</li>
              <li>Les autorités compétentes en cas d&apos;obligation légale</li>
              <li>Nos conseils juridiques en cas de litige</li>
            </ul>
            <p className="mt-4">
              <strong>Nous ne vendons jamais vos données personnelles à des tiers à des fins commerciales.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée strictement nécessaire aux
              finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données de compte actif</strong> : pendant toute la durée de l&apos;inscription</li>
              <li><strong>Données de compte supprimé</strong> : 3 ans après la suppression (prescription civile)</li>
              <li><strong>Données de transaction</strong> : 10 ans (obligations comptables et fiscales)</li>
              <li><strong>Données de navigation</strong> : 13 mois maximum</li>
              <li><strong>Cookies</strong> : 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d&apos;accès</strong> : obtenir une copie de toutes vos données</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter temporairement le traitement</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement pour motif légitime</li>
              <li><strong>Droit de retirer votre consentement</strong> : à tout moment pour les traitements basés sur le consentement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez notre DPO à : <strong>dpo@glassup.fr</strong>
            </p>
            <p>
              Nous répondrons à votre demande dans un délai d&apos;un mois. Ce délai peut être prolongé
              de deux mois en cas de demande complexe.
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL : www.cnil.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement des données en transit (TLS 1.3)</li>
              <li>Chiffrement des données sensibles au repos (AES-256)</li>
              <li>Authentification forte pour l&apos;accès aux systèmes</li>
              <li>Contrôle d&apos;accès strict basé sur les rôles</li>
              <li>Journalisation des accès aux données</li>
              <li>Tests d&apos;intrusion et audits de sécurité réguliers</li>
              <li>Formation de notre personnel à la protection des données</li>
              <li>Procédure de notification en cas de violation de données</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de
              petits fichiers texte stockés sur votre appareil.
            </p>
            <h3 className="text-xl font-medium text-white mb-3 mt-4">Types de cookies utilisés :</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies strictement nécessaires</strong> : indispensables au fonctionnement du site (authentification, sécurité)</li>
              <li><strong>Cookies analytiques</strong> : pour comprendre l&apos;utilisation du site (Plausible Analytics, respectueux de la vie privée)</li>
              <li><strong>Cookies fonctionnels</strong> : pour mémoriser vos préférences (langue, thème)</li>
            </ul>
            <p className="mt-4">
              Nous n&apos;utilisons pas de cookies publicitaires ni de cookies de réseaux sociaux.
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Transferts internationaux</h2>
            <p>
              Vos données peuvent être transférées et traitées dans des pays situés en dehors de
              l&apos;Union Européenne, notamment aux États-Unis (hébergement Vercel, paiements Stripe).
            </p>
            <p>
              Ces transferts sont encadrés par des garanties appropriées conformément au RGPD :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clauses Contractuelles Types de la Commission Européenne</li>
              <li>Certification des prestataires au Data Privacy Framework (DPF)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Modifications</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout moment pour refléter
              les évolutions de nos pratiques ou de la réglementation. En cas de modification
              substantielle, vous serez informé par email ou par notification sur la plateforme
              au moins 30 jours avant l&apos;entrée en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données
              personnelles :<br /><br />
              <strong>GlassUp SAS</strong><br />
              Email : dpo@glassup.fr<br />
              Téléphone : 01 89 70 71 22
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-[#00A8E1] hover:underline inline-flex items-center gap-2"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
