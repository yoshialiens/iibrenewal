##### pgdmailform_sendmail.cgi
# 
# pgdmailform.cgi sendmail
# 
# by am@pgd.jp


package PgdMailFormSendmail;

$PgdMailFormSendmail::sendmail_path = '/usr/sbin/sendmail';

sub sendmail {
	
	use Jcode;
	use MIME::Lite;
	
	# Unicode::Japanese �����p�ł���Γǂݍ���
	my $use_unicode_japanese = 0;
	if (eval 'use Unicode::Japanese; 1') { $use_unicode_japanese = 1;}
	
	# �����̓ǂݍ���
	my ($maildata) = @_;
	
	# ���[���T�u�W�F�N�g�EFrom�ETo�E���[���{�����R�[�h�ϊ�
	# Jcode �̏ꍇ
	if (!$use_unicode_japanese) {
		$maildata->{'Subject'} = Jcode->new($maildata->{'Subject'})->jis; 
		$maildata->{'From'} = Jcode->new($maildata->{'From'})->jis; 
		$maildata->{'To'} = Jcode->new($maildata->{'To'})->jis; 
		$maildata->{'Data'} = Jcode->new($maildata->{'Data'})->jis; 
	# Unicode::Japanese �����p�ł����Jcode�̕ς��ɗ��p����B�g�_�b�V���Ȃǈꕔ�����̕��������h�~
	} elsif ($use_unicode_japanese) {
		$maildata->{'Subject'} = Unicode::Japanese->new($maildata->{'Subject'},'auto')->jis; 
		$maildata->{'From'} = Unicode::Japanese->new($maildata->{'From'},'auto')->jis; 
		$maildata->{'To'} = Unicode::Japanese->new($maildata->{'To'},'auto')->jis; 
		$maildata->{'Data'} = Unicode::Japanese->new($maildata->{'Data'},'auto')->jis; 
	}
	
	# ���[���T�u�W�F�N�g�EFrom�ETo��MIME�G���R�[�h
	$maildata->{'Subject'} = Jcode->new($maildata->{'Subject'})->mime_encode;
	$maildata->{'From'} = Jcode->new($maildata->{'From'})->mime_encode;
	$maildata->{'To'} = Jcode->new($maildata->{'To'})->mime_encode;
	
	my $msg = MIME::Lite->new(
		Type => 'text/plain; charset="ISO-2022-JP"',
		Encoding => '7bit',
		From => $maildata->{'From'},
		To => $maildata->{'To'},
		Cc => $maildata->{'Cc'},
		Bcc => $maildata->{'Bcc'},
		Subject => $maildata->{'Subject'},
		Data => $maildata->{'Data'},
	);
	
	# ���[�����M
	eval {
		if ($maildata->{'Return-Path'}) {
			$msg->send(
				'sendmail',
				'FromSender' => $maildata->{'Return-Path'},
			);
		} else {
			$msg->send(
				'sendmail',
			);
		}
	};
	if ($@) {
		return $@;
	}
	
	return 1;
	
}

1;

